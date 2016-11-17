var gulp 			= require('gulp');
var angularFilesort = require('gulp-angular-filesort'), inject = require('gulp-inject');

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
			config.bowerDir+'/bootstrap/dist/js/bootstrap.js',
			config.bowerDir+'/jquery/dist/jquery.js',
			config.bowerDir+'/angular/angular.js',
		])
		.pipe(gulp.dest(config.public+'/assets/js/bower'))
	
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
				// .pipe(angularFilesort())
				, {ignorePath: 'public/'}
			) 
		)
		.pipe(
			inject(
				gulp.src([
					// config.public+'/assets/css/bower/*.css',
					config.public+'/assets/js/bower/*.js',
					// config.public+'/assets/js/*.js',
				])
				.pipe(angularFilesort())
				, {ignorePath: 'public/'}
			) 
		)
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/js/*.js',
				])
				.pipe(angularFilesort())
				, {ignorePath: 'public/', starttag: '<!-- inject:body:{{ext}} -->'}
			)
		)
		.pipe(gulp.dest(config.public));
});


gulp.task('default',['fonts','css','js','inject1']);