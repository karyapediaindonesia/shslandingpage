import React from 'react';
import {
  ArrowRight,
  ArrowLeft,
  X,
  MessageCircle,
  MessageSquare,
  CheckCircle2,
  Check,
  Lock,
  LockOpen,
  Key,
  AlertCircle,
  AlertTriangle,
  Menu,
  Calendar,
  Clock,
  BadgeCheck,
  Globe,
  Users,
  Brain,
  BookOpen,
  Camera,
  MapPin,
  Map,
  Phone,
  ExternalLink,
  Trash2,
  Edit3,
  Pencil,
  Download,
  Upload,
  Shield,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ZoomIn,
  Share2,
  Play,
  Search,
  Plus,
  Save,
  RotateCcw,
  LogOut,
  Image as ImageIcon,
  Images,
  Link as LinkIcon,
  Inbox,
  Navigation,
  Sparkles,
  Star,
  SlidersHorizontal,
  LucideIcon
} from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number | string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  // Navigation & Direction
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  chevron_up: ChevronUp,
  chevron_down: ChevronDown,
  expand_less: ChevronUp,
  expand_more: ChevronDown,
  open_in_new: ExternalLink,
  directions: Navigation,

  // UI & Actions
  close: X,
  menu: Menu,
  search: Search,
  add: Plus,
  plus: Plus,
  save: Save,
  delete: Trash2,
  delete_sweep: Trash2,
  download: Download,
  upload: Upload,
  upload_file: Upload,
  restart_alt: RotateCcw,
  logout: LogOut,
  zoom_in: ZoomIn,
  share: Share2,
  link: LinkIcon,

  // Communication & Status
  chat: MessageCircle,
  chat_bubble: MessageSquare,
  check: Check,
  check_circle: CheckCircle2,
  verified: BadgeCheck,
  error: AlertCircle,
  warning: AlertTriangle,
  star: Star,
  call: Phone,
  phone: Phone,

  // Security & Admin
  lock: Lock,
  lock_open: LockOpen,
  key: Key,
  admin_panel_settings: Shield,
  shield_person: Shield,
  shield: Shield,
  keyboard: SlidersHorizontal,

  // Media & Content
  photo_camera: Camera,
  photo_library: Images,
  collections: Images,
  add_photo_alternate: ImageIcon,
  image: ImageIcon,
  smart_display: Play,
  view_carousel: Images,

  // Maps & Location
  map: Map,
  pin_drop: MapPin,
  location_on: MapPin,
  edit_location_alt: MapPin,

  // Themes & Pillars
  groups: Users,
  psychology: Brain,
  auto_stories: BookOpen,
  public: Globe,
  calendar_today: Calendar,
  schedule: Clock,
  inbox: Inbox,

  // Editing
  edit: Pencil,
  edit_note: Edit3,
  sparkles: Sparkles,
};

export const Icon: React.FC<IconProps> = ({ name, className = '', size, style, ...rest }) => {
  const normalizedName = name.toLowerCase().trim();
  const IconComponent = ICON_MAP[normalizedName] || ArrowRight;

  return (
    <IconComponent
      size={size || '1em'}
      className={`inline-block shrink-0 align-middle ${className}`}
      style={style}
      aria-hidden="true"
      {...rest}
    />
  );
};
