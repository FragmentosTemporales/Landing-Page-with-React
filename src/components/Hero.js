const Hero = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" src="	https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" width="200" height="165" />
            <h1 class="display-5 fw-bold">Build fast, responsive sites with Bootstrap</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins..</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-dark btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;