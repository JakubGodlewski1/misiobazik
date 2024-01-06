import Image from "next/image";
import kindergarten_hero_phone from "./../../../public/pics/kindergarten_hero_phone.jpg"
import nursery_hero_phone from "./../../../public/pics/nursery_hero_phone.jpg"
import nursery_hero_desktop from "./../../../public/pics/nursery_hero_desktop.jpg"
import OpenMainModalBtn from "@/app/[businessType]/OpenMainModalBtn";
import {Post, posts} from "@/data/posts";
import AktualnosciCart from "@/app/[businessType]/AktualnosciCart";

const AktualnosciPage = ({params: {businessType}}:{params:{businessType: "zlobek" | "przedszkole"}}) => {

    return (
        <>
            <section className="h-[calc(100svh-142px)] flex flex-col">
                <div className="flex-grow relative">
                    {businessType === "przedszkole" && <Image src={kindergarten_hero_phone} layout="fill" objectFit="cover" alt="Główne zdjęcie"/>}
                    {businessType === "zlobek" && <>
                        <Image className="md:hidden" src={nursery_hero_phone} layout="fill" objectFit="cover" alt="Główne zdjęcie"/>
                        <Image className="hidden md:block" src={nursery_hero_desktop} layout="fill" objectFit="cover" alt="Główne zdjęcie"/>
                    </>
                    }
                </div>
                <div className="h-48 flex flex-col bg-secondary-content justify-center">
                    <h1 className="mb-4">Nabór do {businessType === "zlobek" ? "żłobka" : "przedszkola"} trwa cały
                        rok</h1>
                    <OpenMainModalBtn businessType={businessType}/>
                </div>
            </section>
            <section className="mt-12 mx-auto px-4 max-w-screen-xl mb-12">
                <h1>Aktualności</h1>
                {businessType === "przedszkole" && <PostsWrapper posts={posts}/>}
            </section>
        </>
    );
};

export default AktualnosciPage;

const PostsWrapper = ({posts}: { posts: Post[]}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts && posts.length > 0 && posts.map((post) => (
                <AktualnosciCart
                    key={post.title}
                    imgSrc={post.imgSrc}
                    text={post.text}
                    title={post.title}
                />
            ))}
        </div>
    );
};