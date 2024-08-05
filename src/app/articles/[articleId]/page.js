import Hero from "@/components/shared/hero/Hero";
import "./article.css";
import ArticleEle from "@/components/articles/article/ArticleEle";
export const fetchCache = 'force-no-store';

async function getData(token) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Articles/GetArticleDetails?token=${token}`, {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function generateMetadata({ params }, parent) {
  // read route params

  // fetch data
  const product = await getData(params.articleId)

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  console.log(product)
  return {
    openGraph: {
      description: product?.content,
      url: `https://abad-next.netlify.app/articles/${params.articleId}`,
      siteName: 'ABAD | آباد للتدريب',
      images: [
        {
          url: product?.articleImage,
          width: 800,
          height: 600,
        },
      ],
      locale: 'ar_SA',
      type: 'website',
    },
  }
}

export default async function Article({ params }) {
  // const [autherImg, setAuthorImage] = useState(false)
  // const [articleImg, setArticleImg] = useState(false)
  // const [data, setData] = useState(null)
  const data = await getData(params.articleId)
  // useEffect(() => {
  //   fetchArticle(params.articleId).then(e => setData(e)).catch(e => console.log(e))
  // }, [])

  return (
    <main className="pb-10">
      {/* HERO start  */}
      <Hero>
        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-60 sm:max-w-fit">
          <span className="text-abad-gold whitespace-nowrap">تواصل</span>
          &nbsp;
          <span>معنا</span>
        </h2>
        <h4 className="text-sm md:text-2xl max-w-2xl !leading-relaxed">
          معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
          المتخصصة في تقنية المعلومات.
        </h4>
      </Hero>
      {/* <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-60 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap">تواصل</span>
            &nbsp;
            <span>معنا</span>
          </h2>
          <h4 className="text-sm md:text-2xl max-w-2xl !leading-relaxed">
            معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
            المتخصصة في تقنية المعلومات.
          </h4>
        </div>
        <div className="back-shape overflow-hidden w-full relative -z-10 h-full md:min-h-[600px] md:h-auto">
          <img
            className="w-full h-full md:h-auto object-cover md:min-h-[600px]"
            src="/media/BackgroundHero_rect.png"
            alt=""
          />
          <img
            className="md:w-36 w-20 absolute top-[8vh] md:top-[10vh] right-0"
            src="/media/hero-rectangle.png"
            alt=""
          />
        </div>
      </section> */}
      {/* HERO end  */}
      <ArticleEle data={data} />
    </main>
  );
};