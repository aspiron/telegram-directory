import { IIcons } from '../client/components/elements/Icon';

export interface ICategories {
  count?: number;
  icon?: keyof IIcons;
  name: string;
  slug: string;
}

export const sorts: ICategories[] = [
  {
    icon: 'barChart',
    name: 'Top',
    slug: 'top',
  },
  {
    icon: 'flame',
    name: 'Hot',
    slug: 'hot',
  },
  {
    icon: 'clock',
    name: 'New',
    slug: 'new',
  },
];

export const types: ICategories[] = [
  {
    icon: 'station',
    name: 'Channels',
    slug: 'channel',
  },
  {
    icon: 'robot',
    name: 'Bots',
    slug: 'bot',
  },
  {
    icon: 'messages',
    name: 'Groups',
    slug: 'supergroup',
  },
];

export const categories: ICategories[] = [
  {
    name: 'Animals',
    slug: 'animals',
  },
  {
    name: 'Anime',
    slug: 'anime',
  },
  {
    name: 'Art/Design',
    slug: 'art-design',
  },
  {
    name: 'Business',
    slug: 'business',
  },
  {
    name: 'Cars/Motors',
    slug: 'cars-motors',
  },
  {
    name: 'Education',
    slug: 'education',
  },
  {
    name: 'Entertainment',
    slug: 'entertainment',
  },
  {
    name: 'Fashion/Fitness',
    slug: 'fashion-fitness',
  },
  {
    name: 'Food/Drink',
    slug: 'food-drink',
  },
  {
    name: 'Gaming',
    slug: 'gaming',
  },
  {
    name: 'Lifestyle/Health',
    slug: 'lifestyle-health',
  },
  {
    name: 'Music',
    slug: 'music',
  },
  {
    name: 'News/Magazine',
    slug: 'news-magazine',
  },
  {
    name: 'Science',
    slug: 'science',
  },
  {
    name: 'Shopping',
    slug: 'shopping',
  },
  {
    name: 'Sports',
    slug: 'sports',
  },
  {
    name: 'Tech/Computer',
    slug: 'tech-computer',
  },
  {
    name: 'Video',
    slug: 'video',
  },
  {
    name: 'Other',
    slug: 'other',
  },
];

export type AllCategoriesType = Record<
  'sorts' | 'types' | 'categories',
  ICategories[]
>;
