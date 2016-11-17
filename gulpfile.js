var gulp = require('gulp');
var inject		= require('gulp-inject');

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

gulp.task('html', function(){
	return true;
	// return gulp
	// 	.src([config.assets+'/html/index.html'])
	// 	.pipe(gulp.dest(config.public));
});

gulp.task('index', ['html'], function(){

// var injectOptions = {
//      ignorePath: 'dist/'
//      addRootSlash: false,
//      // read : false,
//      // relative: true,
// };

	return gulp
		.src([config.assets+'/html/index.html'])
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/css/bower/*.css',
					config.public+'/assets/js/bower/*.js',
				], {read : false})
				// , {relative: true}
				, {ignorePath: 'public/'}//, {addRootSlash: false}
			) 
		)
		.pipe(
			inject(
				gulp.src([
					config.public+'/assets/js/*.js',
				], {read : false})
				, {starttag: '<!-- inject:body:{{ext}} -->'}
				// , {relative: true}
				, {ignorePath: 'public/'}
				// , {addRootSlash: false}
			)
		)
		.pipe(gulp.dest(config.public));
});

gulp.task('default',['fonts','css','js','index']);//,'watch'*/