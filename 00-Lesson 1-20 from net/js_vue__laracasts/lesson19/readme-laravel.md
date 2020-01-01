To use the provided Laravel backend instead

1. `git clone https://github.com/laracasts/Vue-Forms`
1. `cd Vue-Forms`
1. `composer install`
    - This installs the vendor folder and other packages which are not included in above repository
1. `npm install` or `yarn`
    - This installs the `node_modules`  folder 
1. `cp .env.example .env`
1. Edit database details in `.env` file if required.
1. `php artisan key:generate`
    - This creates the missing `APP_KEY` in the `.env` file.
1. `php artisan config:clear`
1. `php artisan migrate`
