import './Footer.css'

export const Footer = () => {
  return(
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target='_blank'>
              <img src="./images/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target='_blank'>
              <img src="./images/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.bom" target='_blank'>
              <img src="./images/ig.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  )
}