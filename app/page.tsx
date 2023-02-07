import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'
import Image from 'next/image'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>
          すいむ (<Link href="https://twitter.com/swimuuu">@swimuuu</Link>
          )って？
        </h2>
        <Image
          src="/images/flyingRubberDuck.jpeg"
          width={200}
          height={200}
          alt="My avatar"
        />

        <p>
          おでかけとのりもの、おいしいごはんとおさけがだいすきなｱﾋﾙﾁｬﾝです。
        </p>
        <p>昔は南の島に住んでいたけれど、今は日本のまんなかあたりにいます。</p>
        <p>
          好きなゲームは陣取りゲーム、SplatoonとIngressをやってたりやってなかったりします。
        </p>
        <p>好きな色は青です。</p>
        <p>プログラミングにも興味があります。</p>
        <p>
          このサイトは{' '}
          <Link href="https://github.com/otoyo/easy-notion-blog">
            easy-notion-blog
          </Link>{' '}
          を使って公開しています。
        </p>
        <p>
          easy-notion-blog
          を使っている方々から刺激を受けながら、楽しんでいます。
        </p>
        <p>最近はいろいろなものに興味を持ちすぎて収集付かなくなっています。</p>
        <p>
          やりきれないくらい、やりたいことがいっぱいあるのは嬉しいことだなとおもっています。
        </p>
        <br />
        <h2>このブログで書きたいこと</h2>
        <ul>
          <li>おでかけのこと</li>
          <li>のりもののこと</li>
          <li>おいしいごはんとおさけのこと</li>
          <li>ゲームのこと</li>
          <li>easy-notion-blogのカスタマイズのこと</li>
          <li>そのほかTwitterでは書ききれないあれこれ</li>
        </ul>
        <br />
        <h2>連絡をとりたい</h2>
        <p>
          Twitterアカウント(
          <Link href="https://twitter.com/swimuuu">@swimuuu</Link>
          )で待っています。
        </p>
      </div>
    </div>
  </>
)

export default RootPage
