import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>すいむ (@swimuu)って？</h2>
      <p>おでかけとのりもの、おいしいごはんとおさけがだいすきなｱﾋﾙﾁｬﾝです。</p>
      <p>昔は南の島に住んでいたけれど、今は日本のまんなかあたりにいます。</p>
      <p>好きなゲームは陣取りゲーム、SplatoonとIngressをやってたりやってなかったりします。</p>
      <p>好きな色は青です。</p>
      <p>プログラミングにも興味があります。</p>
      <p>このサイトは  <ExtLink href="https://github.com/otoyo/easy-notion-blog">easy-notion-blog</ExtLink> をいじって公開しています。</p>
      <p>easy-notion-blog を使っている方々から刺激を受けながら、楽しんでいます。</p>
      <p>最近はいろいろなものに興味を持ちすぎて収集付かなくなっています。</p>
      <p>やりきれないくらい、やりたいことがいっぱいあるのは嬉しいことだなとおもっています。</p>
      <br/>
      <h2>このブログで書きたいこと</h2>
      <ul>
        <li>おでかけのこと</li>
        <li>のりもののこと</li>
        <li>おいしいごはんとおさけのこと</li>
        <li>ゲームのこと</li>
        <li>easy-notion-blogのカスタマイズのこと</li>
        <li>そのほかTwitterでは書ききれないあれこれ</li>
      </ul>
      <br/>
    <h2>連絡をとりたい</h2>
    <p>Twitterアカウント(<ExtLink href="https://twitter.com/swimuuu">@swimuuu</ExtLink>)で待っています。</p>
      <p>
        easy-notion-blog powered by{' '}
        <ExtLink href="https://github.com/otoyo/easy-notion-blog">
          otoyo/easy-notion-blog
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
