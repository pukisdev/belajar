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
			config.bowerDir+'/components-font-awesome/fonts/**/*',
		])
		.pipe(gulp.dest(config.public+'/fonts'));
});

gulp.task('css', function(){
	return gulp
		.src([
			config.bowerDir+'/bootstrap/dist/css/bootstrap.css',
			config.bowerDir+'/components-font-awesome/css/font-awesome.css',
		])
		.pipe(gulp.dest(config.public+'/css'));
});

gulp.task('js', function(){
	return gulp
		.src([
			config.bowerDir+'/bootstrap/dist/js/bootstrap.js',
			config.bowerDir+'/jquery/dist/**/*',
		])
		.pipe(gulp.dest(config.public+'/js'));
});

gulp.task('default',['fonts','css','js']);//,'watch'*/