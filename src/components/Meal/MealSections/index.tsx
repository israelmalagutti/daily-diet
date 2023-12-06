import { MealType, MealCard } from "../MealCard";

import { Section, Sections } from "./styles";

export type MealSection = {
  title: string;
  data: MealType[];
};

export type MealSections = {
  meals: MealSection[];
};

export type MealSectionProps = MealSections & {};

/**
 * fix: Sort order should be from newest to oldest
 * fix: bottom of the list exceed screen limit and cannot be seem
 */
export function MealSections({ meals }: MealSectionProps) {
  const renderSectionHeader = (section: MealSection) => {
    const date = section.title.split(" ");
    const sectionDate = date[0] + " " + date[1];
    const sectionYear = date[2];

    return (
      <Section.Header>
        <Section.Date>{sectionDate}</Section.Date>
        <Section.Year>{sectionYear}</Section.Year>
      </Section.Header>
    );
  };

  const renderItem = (meal: MealType) => (
    <MealCard
      id={meal.id}
      name={meal.name}
      createdAt={meal.createdAt}
      diet={meal.diet}
    />
  );

  return (
    <Sections
      bounces={false}
      stickySectionHeadersEnabled
      showsVerticalScrollIndicator={false}
      sections={meals}
      keyExtractor={(_, index) => index.toString()}
      renderSectionHeader={({ section }) => renderSectionHeader(section)}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}
