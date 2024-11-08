import React, { createFileRoute } from '@umijs/tnf/router';
import ItemList from '../components/item-list';
import { fetchList } from '../services/api';
import type { Params } from '../types';

export const Route = createFileRoute('/job/$page')({
  component: JobComponent,
  loader: async ({ params }: { params: Params }) =>
    await fetchList('job', Number(params.page)),
});

function JobComponent() {
  const { page } = Route.useParams();
  const { items, maxPage } = Route.useLoaderData();

  return (
    <ItemList type="job" page={Number(page)} maxPage={maxPage} items={items} />
  );
}
