export interface IEmployee {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  avatar: string;
  experience: string;
}

export const employees: IEmployee[] = [
  {
    id: 1,
    name: "Иван Петров",
    position: "Frontend Developer",
    email: "ivan@mail.com",
    phone: "+7 (999) 123-45-67",
    avatar: "👨‍💻",
    experience: "5 лет",
  },
  {
    id: 2,
    name: "Анна Смирнова",
    position: "UI/UX Designer",
    email: "anna@mail.com",
    phone: "+7 (999) 234-56-78",
    avatar: "👩‍🎨",
    experience: "4 года",
  },
  {
    id: 3,
    name: "Михаил Иванов",
    position: "Backend Developer",
    email: "mikhail@mail.com",
    phone: "+7 (999) 345-67-89",
    avatar: "👨‍🔧",
    experience: "7 лет",
  },
];
