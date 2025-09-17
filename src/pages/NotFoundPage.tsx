import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-6 mb-2">
        Página no encontrada
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        La página que estás buscando no existe.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => navigate("/")}>Volver a la página de inicio</Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Volver a la página anterior
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
