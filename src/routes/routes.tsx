import MainLayout from "@layouts/MainLayout";
import { Completed, HomePage, Quiz } from "@pages";

const router = [
  {
    path: "",
    element: <MainLayout />,
    errorElement: <div>404 page</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "quiz", element: <Quiz /> },
      { path: "completed", element: <Completed /> }
    ]
  }
];

export default router;
