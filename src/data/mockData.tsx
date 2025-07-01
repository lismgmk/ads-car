import {
  DirectionsCar,
  DirectionsBus,
  Print,
  Speed,
  Visibility,
  MonetizationOn,
  Schedule,
} from '@mui/icons-material';
import { Service, PortfolioItem, Advantage, Article } from '../types';

export const services: Service[] = [
  {
    id: 'corporate',
    title: 'Реклама на корпоративном транспорте',
    description:
      'Брендирование корпоративных автомобилей для повышения узнаваемости бренда',
    icon: <DirectionsCar sx={{ fontSize: 40 }} />,
    features: [
      'Единовременная оплата',
      'Работа 24/7',
      'Широкий охват',
      'Выделение среди конкурентов',
    ],
  },
  {
    id: 'public',
    title: 'Реклама на маршрутных такси',
    description:
      'Размещение рекламы на общественном транспорте по всему городу',
    icon: <DirectionsBus sx={{ fontSize: 40 }} />,
    features: [
      'Массовый охват',
      'Доступная цена',
      'Высокая эффективность',
      'Постоянное движение',
    ],
  },
  {
    id: 'interior',
    title: 'Реклама в салоне транспорта',
    description: 'Внутренняя реклама для прямого воздействия на пассажиров',
    icon: <Print sx={{ fontSize: 40 }} />,
    features: [
      'Прямой контакт',
      'Длительное воздействие',
      'Целевая аудитория',
      'Креативные решения',
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Мебель Центр Озерцо',
    category: 'public',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop',
    description: 'Реклама мебельного центра на маршрутках',
  },
  {
    id: 2,
    title: 'Корпоративный автопарк',
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
    description: 'Брендирование корпоративного транспорта',
  },
  {
    id: 3,
    title: 'Реклама ресторана',
    category: 'public',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop',
    description: 'Продвижение ресторана через транспортную рекламу',
  },
  {
    id: 4,
    title: 'IT-компания',
    category: 'corporate',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
    description: 'Брендирование автомобилей IT-компании',
  },
];

export const advantages: Advantage[] = [
  {
    icon: <Speed sx={{ fontSize: 50, color: '#1976d2' }} />,
    title: 'Быстрая окупаемость',
    description:
      'Реклама на транспорте окупается в кратчайшие сроки благодаря широкому охвату аудитории',
  },
  {
    icon: <Visibility sx={{ fontSize: 50, color: '#1976d2' }} />,
    title: 'Высокая заметность',
    description:
      'Движущаяся реклама привлекает внимание в 5 раз эффективнее статичной',
  },
  {
    icon: <MonetizationOn sx={{ fontSize: 50, color: '#1976d2' }} />,
    title: 'Доступная цена',
    description:
      'Одна из самых экономичных форм наружной рекламы с максимальным эффектом',
  },
  {
    icon: <Schedule sx={{ fontSize: 50, color: '#1976d2' }} />,
    title: 'Работа 24/7',
    description:
      'Ваша реклама работает круглосуточно, охватывая максимальное количество людей',
  },
];

export const articles: Article[] = [
  {
    title: 'Эффективность рекламы на транспорте',
    excerpt:
      'Как реклама на транспорте помогает увеличить продажи и узнаваемость бренда',
    date: '15 июня 2024',
  },
  {
    title: 'Тренды в транспортной рекламе 2024',
    excerpt: 'Современные подходы к дизайну и размещению рекламы на транспорте',
    date: '10 июня 2024',
  },
  {
    title: 'Выбор материалов для наклеек',
    excerpt: 'Как правильно выбрать материалы для долговечной и яркой рекламы',
    date: '5 июня 2024',
  },
];
