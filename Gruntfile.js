module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			with_banner: {
				options: {
					banner: '* Minified CSS */'
				},
				files: {
					'public/css/all.min.css': [
						'src/css/normaset.css',
						'src/css/main.css'
					]
				}
			}			
		},

		uglify: {

			my_target: {
				files: {
					'public/js/all.min.js': [
						'src/js/jquery.js',
						'src/js/main.js'
					]
				}
			}
		},

		watch: {

			options: {
				livereload: true
			},
			css: {
				files: 'src/css/*.css',
				tasks: ['cssmin']
			},
			js: {
				files: 'src/js/*.js',
				tasks: ['uglify']
			}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['cssmin', 'uglify']);
	grunt.registerTask('w', ['watch']);
};