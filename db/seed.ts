import { db, Categories, Todos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO - Inserimento Dati nelle Tabelle
	await db.insert(Categories).values([
		{ id: 0, category: 'General' },
		{ id: 1, category: 'Learning' },
		{ id: 2, category: 'Projects' },
		{ id: 3, category: 'Articles' },
		{ id: 4, category: 'Events' },
	]);

	// TODO - Inserimento Dati nelle Tabelle
	await db.insert(Todos).values([
		{ id: 0, task: 'Testo numero uno', catId: 0, done: false },
		{ id: 1, task: 'Testo numero due', catId: 2, done: false },
	]);
}
