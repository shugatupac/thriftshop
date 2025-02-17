import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
}

interface CategoriesGridProps {
  categories: Category[];
}

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.description}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => console.log("Edit", category.id)}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => console.log("Delete", category.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {category.productCount} products
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CategoriesGrid;
