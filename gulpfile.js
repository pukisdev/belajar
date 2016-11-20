var gulp 			= require('gulp');
var angularFilesort = require('gulp-angular-filesort'), 
			inject 	= require('gulp-inject'),
			watch 	= require('gulp-watch');

// var browserSync = require('browser-sync').create();
// var reload		= browserSync.reload; 


var config = {
	bowerDir 	: './bower_components',
	assets		: './assets',
	public		: './public',
}

gulp.task('fonts', function(){
	return gulp
		.src([
			config.bowerDir+'/bootstrap/dist/fonts/*.svg',
			config.bowerDir+'/components-font-awesome/fonts/fontawesome-webfont.svg',
		])
		.pipe(gulp.dest(config.public+'/assets/fonts/bower'));
});

gulp.task('css', function(){
	return gulp
		.src([
			config.bowerDir+'/bootstrap/dist/css/bootstrap.css',
			config.bowerDir+'/components-font-awesome/css/font-awesome.css',
		])
		.pipe(gulp.dest(config.public+'/assets/css/bower'));
});

gulp.task('js', function(){
	gulp.src([
			config.assets+'/scripts/modules/**/*',
		])
		.pipe(gulp.dest(config.public+'/assets/js/modules'));

	gulp.src([
			config.bowerDir+'/**/*.min.js',
			// config.bowerDir+'/bootstrap/dist/js/bootstrap.js',
			// config.bowerDir+'/jquery/dist/jquery.js',
			// config.bowerDir+'/angular/angular.js',
		])
		.pipe(gulp.dest(config.public+'/assets/js/bower'));
	
	gulp.src([
			config.assets+'/scripts/app.js',
		])
		.pipe(gulp.dest(config.public+'/assets/js'));


	return true;
});

gulp.task('inject1', function(){

	return gulp
		.src([config.assets+'/html/index.html'])
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/css/bower/*.css',
				])
				, {ignorePath: 'public/'}
			) 
		)
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/js/bower/**/*.min.js',
				])
				.pipe(angularFilesort()) //melakukan sort sesuai kebutuhan angularjs : syarat parameter read harus false. karena akan dibaca terlebih dahulu
				, {ignorePath: 'public/'}
			) 
		)
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/js/*.js',
				])
				// .pipe(angularFilesort())
				, {ignorePath: 'public/', starttag: '<!-- inject:body:{{ext}} -->'}
			)
		)
		.pipe(gulp.dest(config.public));
});

// gulp.task('serve', ['fonts','css','js','inject1'], function(){
// 	browserSync.init({
// 		server : config.public,
// 	});

// 	gulp.watch(config.assets+'/**/*', ['js','inject1']);
// 	gulp.watch(config.assets+'/**/*').on('change',reload);

// });

// gulp.task('default',['serve']);
gulp.task('default',['fonts','css','js','inject1']);