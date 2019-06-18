module.exports = {// enforces getter/setter pairs in objects
    // getter/setter成对出现
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',
    
    // enforces return statements in callbacks of array's methods
    // 数组函数需要有返回值得会校验是否有return
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',
    
    // treat var statements as if they were block scoped
    // 不允许在变量声明的作用于外引用变量。虽然有变量提升。
    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',
    
    // specify the maximum cyclomatic complexity allowed in a program
    // 不启用
    // http://eslint.org/docs/rules/complexity
    'complexity': ['off', 11],
    
    // enforce that class methods use "this"
    // 类的实例方法要使用this，否则改为静态方法
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],
    
    // require return statements to either always or never specify values
    // 一致的return。同一函数的所有return要么都有返回值，要么都没有。
    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',
    
    // specify curly brace conventions for all control statements
    // 强制所有流程控制语句使用统一的花括号
    // http://eslint.org/docs/rules/curly
    'curly': ['error', 'multi-line'],
    
    // require default case in switch statements
    // switch case 需要一个default分支。如果确定不要defautl可以加注释 // no default
    // http://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],
    
    // encourages use of dot notation whenever possible
    // 优先使用点操作符操作属性。
    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],
    
    // enforces consistent newlines before or after dots
    // 用点运算符操作属性时，如果写成多行点操作符与属性在一行。
    // http://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],
    
    // require the use of === and !==
    // 使用 === 或者 !== 。不启用
    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['off', 'always', { null: 'ignore' }],
    
    // make sure for-in loops have an if statement
    // for in 操作必须有if来判断属性是否来自原型链
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',
    
    // disallow the use of alert, confirm, and prompt
    // 不适用alert
    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',
    
    // disallow use of arguments.caller or arguments.callee
    // 不适用caller和callee
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',
    
    // disallow lexical declarations in case/default clauses
    // 不在case中声明变量。除非case子句用了花括号。
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',
    
    // disallow division operators explicitly at beginning of regular expression
    // 不启用
    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',
    
    // disallow else after a return in an if
    // TODO: semver-major, set allowElseIf to false
    // 含有return的if之后不要出现else，出现else if是没问题的。
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: true }],
    
    // disallow empty functions, except for standalone funcs/arrows
    // 不出现空函数or方法。包括生成器函数、生成器方法、getter、setter。常规函数、箭头函数、常规方法除外。
    // http://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    
    // disallow empty destructuring patterns
    // 禁止使用空的结构赋值
    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',
    
    // disallow comparisons to null without a type-checking operator
    // 禁止和null比较。不启用
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',
    
    // disallow use of eval()
    // 不适用eval
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 'error',
    
    // disallow adding to native types
    // 不扩展原生类型，如数组原型。
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',
    
    // disallow unnecessary function binding
    // 不允许多余的bind方法调用。
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',
    
    // disallow Unnecessary Labels
    // 不允许不必要的label，label语法都会禁用
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',
    
    // disallow fallthrough of case statements
    // 不允许switch case的case没有break
    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',
    
    // disallow the use of leading or trailing decimal points in numeric literals
    // 数字，不允许以小数点开头或者结尾
    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',
    
    // disallow reassignments of native objects or read-only globals
    // 禁止对原生对象或者只读全局属性赋值
    // http://eslint.org/docs/rules/no-global-assign
    
    'no-global-assign': ['error', { exceptions: [] }],
    
    // disallow implicit type conversions
    // 禁止隐含类型转换。不启用
    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    
    // disallow var and named functions in global scope
    // 禁止在全局作用域声明函数和变量
    // http://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',
    
    // disallow use of eval()-like methods
    // 禁止隐式的使用eval。如 setTimeout('alert()', 10)
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',
    
    // disallow this keywords outside of classes or class-like objects
    // 禁止this关键字出现的对象和类之外
    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',
    
    // disallow usage of __iterator__ property
    // 不要使用 __iterator__ 属性
    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',
    
    // disallow use of labels for anything other then loops and switches
    // 不使用label语句
    // http://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    
    // disallow unnecessary nested blocks
    // 不使用不必要的代码块
    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',
    
    // disallow creation of functions within loops
    // 不允许循环内创建函数
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',
    
    // disallow magic numbers
    // 禁止直接使用数字字面量来运算。不启用。
    // http://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    
    // disallow use of multiple spaces
    // 禁止使用多个空格
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    
    // disallow use of multiline strings
    // 禁止多行字符串
    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',
    
    // disallow use of new operator when not part of the assignment or comparison
    // 禁止new创建的对象不赋值给任何变量
    // http://eslint.org/docs/rules/no-new
    'no-new': 'error',
    
    // disallow use of new operator for Function object
    // 不使用new操作 Function
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',
    
    // disallows creating new instances of String, Number, and Boolean
    // 不new基本类型的包装类
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',
    
    // disallow use of (old style) octal literals
    // 不使用八进制数字
    // http://eslint.org/docs/rules/no-octal
    'no-octal': 'error',
    
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // 禁止八进制转移序列。如var foo = 'Copyright \251'; 。而是使用Unicode转移序列。
    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',
    
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // 禁止对函数参数重新赋值，包括参数是对象时的属性。
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
      ]
    }],
    
    // disallow usage of __proto__ property
    // 不操作 __proto__
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 'error',
    
    // disallow declaring the same variable more then once
    // 禁止多次声明同一变量
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',
    
    // disallow certain object properties
    // 禁止使用对象的一些属性
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],
    
    // disallow use of assignment in return statement
    // 禁止的return中使用赋值语句
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],
    
    // disallow redundant `return await`
    // async函数中不要return await，因为async永远返回 await后Promise。
    // http://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',
    
    // disallow use of `javascript:` urls.
    // 不使用 javascript: schema
    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',
    
    // disallow self assignment
    // 禁止变量自己赋值给自己
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',
    
    // disallow comparisons where both sides are exactly the same
    // 禁止自己和自己比较
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',
    
    // disallow use of comma operator
    // 禁止逗号运算符
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',
    
    // restrict what can be thrown as an exception
    // 禁止抛出异常字面量
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',
    
    // disallow unmodified conditions of loops
    // 禁止循环条件一直不改变. 不启用。
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',
    
    // disallow usage of expressions in statement position
    // 禁止出现未使用的表达式
    // http://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
    
    // disallow unused labels
    // 禁止出现未使用的label。label语法会被禁用。
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',
    
    // disallow unnecessary .call() and .apply()
    // 禁止不必要的call 和 apply调用。不启用
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',
    
    // disallow useless string concatenation
    // 禁止必要的字符串拼接
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',
    
    // disallow unnecessary string escaping
    // 禁止不必要的字符转移
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',
    
    // disallow redundant return; keywords
    // 禁止多余的return。 reutrn; === return undefined 
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',
    
    // disallow use of void operator
    // 禁用 void操作符。 因为已经不允许对undefined赋值
    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',
    
    // disallow usage of configurable warning terms in comments: e.g. todo
    // 不允许在注释中出现 TODO FIXME等警告语句。不启用
    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ['off', { 
      terms: ['todo', 'fixme', 'xxx'], 
      location: 'start' 
    }],
    
    // disallow use of the with statement
    // 禁止with语句
    // http://eslint.org/docs/rules/no-with
    'no-with': 'error',
    
    // require using Error objects as Promise rejection reasons
    // 使用Error对象用于Promise reject的原因。可以reject不描述原因。
    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    
    // require use of the second argument for parseInt()
    // parseInt强制要求第二参数。
    // http://eslint.org/docs/rules/radix
    'radix': 'error',
    
    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // 禁止使用不带await的async函数。 不启用。
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',
    
    // requires to declare all vars on top of their containing scope
    // 需要在作用于的顶部声明变量
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',
    
    // require immediate function invocation to be wrapped in parentheses
    // 立即执行函数使用 (function () { return { y: 1 };}()); 形式
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'outside', { 
      functionPrototypeMethods: false 
    }],
    
    // require or disallow Yoda conditions
    // 条件判断，有常量时常量在右侧
    // http://eslint.org/docs/rules/yoda
    'yoda': 'error'    
  };