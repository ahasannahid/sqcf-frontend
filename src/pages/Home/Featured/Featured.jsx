import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import qc from '../../../assets/home/qc.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="কাইয়ুম চৌধুরী"></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={qc} alt="" className='featured-img'/>
                </div>

                <div className="md:ml-10">
                    <p className="uppercase">কাইয়ুম চৌধুরী</p>
                    <p>৯ মার্চ ১৯৩২ - ৩০ নভেম্বর ২০১৪</p>
                    <p>শিল্পী কাইয়ুম চৌধুরী ২০১০ সালে সুফিয়া কামাল পদক লাভ করেন । প্রতিক্রিয়ায় শিল্পী কাইয়ুম চৌধুরী বলেন, 'এমন একজন মহীয়সী নারীর নামাঙ্কিত পদক আমাকে প্রদান করা হয়েছে, জানি না আমি এর যোগ্য কি না। আমি এর জন্য আনন্দিত এবং গর্বিত। বাংলাদেশ মহিলা পরিষদের কাছে আমি অশেষ কৃতজ্ঞতা জানাচ্ছি।'[৭] কাইয়ুম চৌধুরীর ৭৮তম জন্মবার্ষিকীতে সৈয়দ শামসুল হক বলেন, সত্যিকার অর্থে বিশ্বমানের শিল্পী কাইয়ুম চৌধুরী। মুস্তাফা মনোয়ার বলেন, সত্যজিত রায়ের পর গ্রাফিক্স কিংবা প্রচ্ছদ শিল্পকে তিনি অন্যরকম অবস্থানে নিয়ে গেছেন। কামাল লোহানী বলেন, কাইয়ুম চৌধুরী আমাদের চলার পথে সংগ্রামী সাথী। অধ্যাপক বোরহানউদ্দীন খান জাহাঙ্গীর বলেন, তার মতো বন্ধু পাওয়া ভাগ্যের ব্যাপার।[৮] তিনি ২০১৪ সালে শহীদ আলতাফ মাহমুদ পদকে ভূষিত হয়েছেন।</p>
                    
    
                </div>

            </div>
        </div>
    );
};

export default Featured;