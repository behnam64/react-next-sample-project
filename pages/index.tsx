import SigninForm from "../components/home/signin-form";
import ColorSchemeNav from "../components/color-scheme-nav";


export default function Home() {
  return (
    <div className="signup">
      <img className="signup__side-image--desktop" src="images/signup-side-desktop.png" alt="signup-side"/>
      <img className="signup__side-image--tablet" src="images/signup-side-tablet.png" alt="signup-side"/>
      <div className="signup__form">
        <SigninForm />
        <div className="signup__color-scheme">
          <ColorSchemeNav/>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}