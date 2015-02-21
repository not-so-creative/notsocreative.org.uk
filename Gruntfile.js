module.exports = function( grunt ) {
  grunt.initConfig({
    // package information
    pkg: grunt.file.readJSON( 'package.json' ),

    // script hinting
    jshint: {
      options: {
        jshintrc: true
      },
      files: [
        'public/assets/js/**/*.js',
        '!public/assets/js/site.js'
      ]
    },

    // less compilation
    less: {
      dev: {
        files: {
          'public/assets/css/site.css': 'public/assets/less/**/*.less'
        }
      },
      prod: {
        options: {
          compress: true,
          sourceMap: true,
          sourceMapBasepath: 'public/'
        },
        files: {
          'public/assets/css/site.css': 'public/assets/less/**/*.less'
        }
      }
    },

    // compress scripts
    uglify: {
      dev: {
        options: {
          mangle: false,
          beautify: true
        },
        files: {
          'public/assets/js/site.js': [
            'public/assets/js/**/*.js',
            '!public/assets/js/site.js'
          ]
        }
      },
      prod: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          'public/assets/js/site.js': [
            'public/assets/js/**/*.js',
            '!public/assets/js/site.js'
          ]
        }
      }
    },

    // development server
    connect: {
      serve: {
        options: {
          port: 4990,
          useAvailablePort: true,
          base: 'public'
        }
      }
    },

    // file watching
    watch: {
      less: {
        files: [ 'public/assets/less/**/*.less' ],
        tasks: [ 'less:dev' ],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: [ 'public/assets/js/**/*.js', '!public/assets/js/site.js' ],
        tasks: [ 'jshint', 'uglify:dev' ],
        options: {
          livereload: true
        }
      },
      html: {
        files: [ 'public/**/*.html' ],
        options: {
          livereload: true
        }
      }
    },

    // bump version number
    bump: {
      options: {
        files: [ 'package.json', 'bower.json' ],
        commit: true,
        commitMessage: 'Version changed to v%VERSION%',
        commitFiles: [ 'package.json', 'bower.json' ],
        createTag: true,
        tagName: 'v%VERSION%',
        push: false
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-bump' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'default', [ 'serve' ] );
  grunt.registerTask( 'serve', [ 'jshint', 'less:dev', 'uglify:dev', 'connect:serve', 'watch' ] );
  grunt.registerTask( 'build', [ 'jshint', 'less:prod', 'uglify:prod' ] );
};
