import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';

interface FAQSectionProps {
  content: ContentDictionary['faq'];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(content.items.map(item => item.category)))];

  const filteredItems = content.items.filter(item => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="tanya-jawab">
      {/* Header */}
      <div className="flex flex-col gap-2.5 mb-8 sm:mb-12 reveal-on-scroll">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            <EditableText section="faq" field="eyebrow" value={content.eyebrow} />
          </span>
        </div>
        <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight leading-tight">
          <EditableText section="faq" field="title" value={content.title} />
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          <EditableText section="faq" field="intro" value={content.intro} multiline />
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 reveal-on-scroll reveal-delay-100">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={content.searchPlaceholder}
            className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-lowest border border-shs-border text-xs sm:text-sm text-shs-navy placeholder:text-on-surface-variant/70 focus:border-shs-navy"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-shs-navy cursor-pointer"
            >
              <Icon name="close" className="text-[18px]" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-shs-navy text-white shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:text-shs-navy hover:bg-surface-container-high'
              }`}
            >
              {cat === 'all' ? (
                <EditableText section="faq" field="allCategories" value={content.allCategories} />
              ) : (
                cat
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-shs-border border-t border-b border-shs-border reveal-on-scroll reveal-delay-200">
        {filteredItems.length === 0 ? (
          <div className="py-8 text-center text-sm text-on-surface-variant">
            Tidak ada pertanyaan yang sesuai dengan pencarian "{searchQuery}".
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            // find original item index in content.items to update the right item
            const originalIndex = content.items.findIndex(
              (it) => it.question === item.question && it.answer === item.answer
            );
            const targetIdx = originalIndex >= 0 ? originalIndex : idx;

            return (
              <div key={idx} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center text-left font-headline text-base sm:text-lg font-semibold text-shs-navy gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="group-hover:text-amber-800 transition-colors">
                    <EditableText section="faq" subpath={`items.${targetIdx}.question`} value={item.question} />
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-amber-800 border border-shs-border transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-45 bg-surface-container' : 'bg-surface-container-low'
                    }`}
                  >
                    <Icon name="add" className="text-[20px]" />
                  </div>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className="pt-3 pr-4 sm:pr-8 animate-fade-in">
                    <p className="text-xs sm:text-sm sm:leading-relaxed text-on-surface-variant">
                      <EditableText section="faq" subpath={`items.${targetIdx}.answer`} value={item.answer} multiline />
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-amber-800">
                        <EditableText section="faq" subpath={`items.${targetIdx}.category`} value={item.category} />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
