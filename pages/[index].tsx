import { useRouter } from 'next/dist/client/router'
import SideNav from '../components/side-nav';

export default function Home() {
  const router = useRouter();

  console.log(router.query.index)

  return (
    <div className="home">
      {router.query.index}
      <div className="side-nav__desktop">
        <SideNav/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}
