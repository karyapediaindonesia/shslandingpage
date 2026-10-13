import os
import re

# Files to convert
files_to_convert = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') and file != 'Icon.tsx':
            files_to_convert.append(os.path.join(root, file))

def convert_icon_span(match):
    full = match.group(0)
    cls = match.group(1)
    inner = match.group(2).strip()
    
    # Clean up classes
    cls_clean = cls.replace('material-symbols-outlined', '').strip()
    # Replace text-[XXpx] with w-[XXpx] h-[XXpx] or keep as is since Icon handles sizes
    # e.g., text-[18px] -> w-[18px] h-[18px] or text-[18px]
    # Let's convert text-[...px] to size if present, or keep cls_clean
    
    # Handle dynamic inner text like {isCollapsed ? 'expand_less' : 'expand_more'}
    if inner.startswith('{') and inner.endswith('}'):
        expr = inner[1:-1].strip()
        return f'<Icon name={{{expr}}} className="{cls_clean}" />'
    else:
        return f'<Icon name="{inner}" className="{cls_clean}" />'

pattern = re.compile(r'<span\s+className=["\']([^"\']*material-symbols-outlined[^"\']*)["\'][^>]*>(.*?)</span>', re.DOTALL)

for path in sorted(files_to_convert):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'material-symbols-outlined' in content:
        # Determine relative path to Icon.tsx
        dir_depth = len(os.path.relpath(os.path.dirname(path), 'src').split(os.sep))
        rel_prefix = '../' * dir_depth if os.path.dirname(path) != 'src' else './'
        import_path = f'{rel_prefix}ui/Icon' if 'components' in path else './components/ui/Icon'
        # More precise import calculation:
        current_dir = os.path.dirname(path)
        icon_path = os.path.join('src', 'components', 'ui', 'Icon')
        rel_import = os.path.relpath(icon_path, current_dir).replace('\\', '/')
        if not rel_import.startswith('.'):
            rel_import = './' + rel_import
        
        # Check if Icon is already imported
        if f'from \'{rel_import}\'' not in content and f'from "{rel_import}"' not in content and 'import { Icon }' not in content:
            # Add import after first import
            first_import_end = content.find('\n')
            content = content[:first_import_end+1] + f"import {{ Icon }} from '{rel_import}';\n" + content[first_import_end+1:]
        
        new_content = pattern.sub(convert_icon_span, content)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f'Converted: {path}')

print('Icon conversion script finished.')
