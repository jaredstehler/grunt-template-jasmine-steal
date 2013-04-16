Steal template for Jasmine unit tests
-----------------------------------------

## Installation

```
npm install grunt-template-jasmine-steal --save-dev
```

## Template Options

### templateOptions.stealOptions.stealUrl
Type: `String`
Default: path to steal.js (defaults to internal version, probably not desired)

The steal script to use.

### templateOptions.stealOptions.map
Type: `Object`

This object is `JSON.stringify()`-ed into the template and passed into `steal.map()`


## Sample usage

```js
// Example configuration
grunt.initConfig({
  connect: {
    test : {
      options: {
        base : '.',
        port : '?'
      }
    }
  },

  jasmine: {
    taskName: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js',
        host: 'http://127.0.0.1:<%= connect.test.options.port %>/',
        template: require('grunt-template-jasmine-steal'),
        templateOptions: {
          stealOptions: {
			      stealUrl: 'src/steal/steal.js',
            map: {
                '.grunt': '../.grunt'
            }
          }
        }
      }
    }
  }
}
```

*Note* the usage of the 'connect' task configuration. You will need to use a task like
[grunt-contrib-connect][] if you need to test your tasks on a running server.

[grunt-contrib-connect]: https://github.com/gruntjs/grunt-contrib-connect

## Steal notes

With this template, you can use steal in your spec files the same way you would in the 
rest of your application.

```js
/* example widget_spec.js */
steal('widget.js', function() {

	describe('the widget', function() {
		it('is a widget', function() {
			expect(window.Widget).toBeDefined();
		})
	})
})
```
