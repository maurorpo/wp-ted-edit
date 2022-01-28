        <footer>
            <div>
                <nav>
                    <?php wp_nav_menu([ 'container' => false, 'menu' => __( 'The Main Footer', 'bonestheme' ), 'theme_location' => 'footer-nav' ]) ?>
                </nav>
                <p>&copy; <?php echo date('Y') ?> <?php bloginfo('name') ?>.</p>
            </div>
        </footer>
        <?php wp_footer() ?>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
</html>
