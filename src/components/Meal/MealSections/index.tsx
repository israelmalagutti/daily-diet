import {} from "react";
import { parseISO } from "date-fns";

import { MealType, MealCard } from "../MealCard";

import { DateContainer, MealsList, Sections, SectionTitle } from "./styles";

export type MealSection = {
  title: string;
  data: MealType[];
};

export type MealSections = {
  meals: MealSection[];
};

export type MealSectionProps = MealSections & {};

export function MealSections({ meals }: MealSectionProps) {
  const renderSectionHeader = (section: MealSection) => {
    const date = section.title.split(" ");
    const sectionDate = date[0] + " " + date[1];
    const sectionYear = date[2];

    return (
      <DateContainer>
        <SectionTitle.Date>{sectionDate}</SectionTitle.Date>
        <SectionTitle.Year>{sectionYear}</SectionTitle.Year>
      </DateContainer>
    );
  };

  const renderItem = (item: MealType[]) => (
    <MealsList
      data={item}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item: meal }) => (
        <MealCard
          id={meal.id}
          name={meal.name}
          createdAt={meal.createdAt}
          withinDiet={meal.withinDiet}
        />
      )}
    />
  );

  return (
    <Sections
      sections={meals}
      keyExtractor={(_, index) => index.toString()}
      renderSectionHeader={({ section }) => renderSectionHeader(section)}
      renderItem={({ section }) => renderItem(section.data)}
    />
  );
}
