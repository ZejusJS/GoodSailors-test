import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { EnumCompletionTodosValues, IFilters } from "../../types/filter";
import Radio from "../form/Radio";

const CompletionOptions: [string, EnumCompletionTodosValues][] = [
  ["Všechny", "all"],
  ["Dokončené", "completed"],
  ["Nedokončené", "notCompleted"],
];

export function Filter({
  filters,
  setFilters,
}: {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}) {
  return (
    <fieldset>
      <legend>Zobrazit úkoly:</legend>
      {CompletionOptions.map((opt) => {
        return (
          <Radio
            label={opt[0]}
            value={opt[1]}
            id={opt[1]}
            checked={filters.show === opt[1]}
            onChange={(e) => {
              setFilters({
                ...filters,
                show: opt[1],
              });
            }}
            name="completed"
            key={opt[1]}
          />
        );
      })}
    </fieldset>
  );
}
