type RecipeMetaProps = {
  cuisine: string;
  mealType: string[];
  difficulty: string;
  cookTimeMinutes: number;
};

export default function RecipeMeta({ cuisine, mealType, difficulty, cookTimeMinutes }: RecipeMetaProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
      <div><dt className="text-xs text-plum/60">Cuisine</dt><dd className="mt-1 font-medium text-plum">{cuisine}</dd></div>
      <div><dt className="text-xs text-plum/60">Meal type</dt><dd className="mt-1 font-medium text-plum">{mealType.join(", ")}</dd></div>
      <div><dt className="text-xs text-plum/60">Difficulty</dt><dd className="mt-1 font-medium text-plum">{difficulty}</dd></div>
      <div><dt className="text-xs text-plum/60">Cook time</dt><dd className="mt-1 font-medium text-plum">{cookTimeMinutes} mins</dd></div>
    </dl>
  );
}