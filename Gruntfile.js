module.exports = function( grunt ) {

    grunt.initConfig({
    // Tasks que o Grunt deve executar
    less: {
        development: {
            options: {
                // paths: ["css"]
            },
            files: {
                "assets/css/site.css": "assets/css/less/site.less"
            }
        },
        production: {
            options: {
                // paths: ["css"],
                // cleancss: true,
                modifyVars: {
                    // imgPath: '"http://mycdn.com/path/to/images"',
                    // bgColor: 'red'
                }
            },
            files: {
                "assets/css/site.css": "assets/css/less/site.less"
            }
        }
    }, // less
    jekyll: {
      options: {                          
        src: '.'
      },
      dist: {
        options: {
          dest: './_site'
          // config: '_config-dev.yml'
        }
      }
    },
    uglify : {
      options : {
        mangle : false 
      },

      my_target : {
        files : {
          'assets/js/site.js' : [ 'assets/js/_js/site.js' ]
        }
      }
    }, // uglify
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['assets/css/less/*'],
        tasks: ['less', 'jekyll']
      },
      html: {
        files: ['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*'],
        tasks: ['jekyll'],
        options: {
          spawn: false,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './_site'
        }
      }
    }

});
require('load-grunt-tasks')(grunt); 
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'less' ] );
  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
  grunt.registerTask('server', ['connect', 'watch']);  
};