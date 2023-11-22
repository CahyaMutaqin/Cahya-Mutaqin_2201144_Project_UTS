const Footer=()=>{
    return(
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footerData">
                    <h2 class="footer__title">QUETOS</h2>
                    <p class="footer__text">It's time to say goodbye, 
                    but i think goodbyes are sad and i'd much rather say hello. 
                    hello to a new adventure"
                    <br></br>~Ernie Harwell~</p>
                </div>

                <div class="footerData">
                    <h2 class="footer__title">NAVIGATE</h2>
                    <ul>
                        <li><a href="/" class="footer__link">Home</a></li>
                        <li><a href="/about" class="footer__link">About</a></li>
                        <li><a href="/Contact" class="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footerData">
                    <h2 class="footer__title">SOCIAL MEDIA</h2>
                    <a href="https://www.instagram.com/cahyaaatqn/" class="about__social-icon"><i class='bx bxl-instagram' ></i></a>
                    <a href="https://www.facebook.com/cahya.mutaqin.5" class="about__social-icon"><i class='bx bxl-facebook' ></i></a>
                    <a href="https://twitter.com/cahya_mtqn" class="about__social-icon"><i class='bx bxl-twitter' ></i></a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;