import { Carousel } from "@/components/ui/carousel";
import tree from '@/assets/placeholder/tree.jpg';
import background from '@/assets/backgrounds/background.jpg';
import home from '@/assets/backgrounds/home.jpeg';

const NewsPage = () => {
    const items = [
        {
            id: 1,
            title: "News 1",
            imagePath: tree,
        },
        {
            id: 2,
            title: "News 2",
            imagePath: background,
        },
        
        {
            id: 3,
            title: "nuefoss 3",
            imagePath: home,
        },
    ];
  return (
    <div>
        <Carousel items={items} />
    </div>
  );
};

export default NewsPage;