import { defineDb, defineTable, column } from 'astro:db';

// Definizione Tabella
const Categories = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    category: column.text(),
  }
});

// Definizione Tabella
const Todos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    task: column.text(),
    catId: column.number({ references: () => Categories.columns.id }),
    done: column.boolean(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Categories, Todos }
});
