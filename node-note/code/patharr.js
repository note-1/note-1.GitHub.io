console.log(module.paths);

/*
[
  'C:\\Users\\Administrator\\Desktop\\resume\\node-note\\code\\node_modules',
  'C:\\Users\\Administrator\\Desktop\\resume\\node-note\\node_modules',      
  'C:\\Users\\Administrator\\Desktop\\resume\\node_modules',
  'C:\\Users\\Administrator\\Desktop\\node_modules',
  'C:\\Users\\Administrator\\node_modules',
  'C:\\Users\\node_modules',
  'C:\\node_modules'
]
*/

/*
    模块路径的生成规则：
    当前文件目录下的node_modules目录
    父目录下的node_modules目录
    父目录的父目录下的node_modules目录
    沿路径向上逐级递归，直到根目录下的node_modules目录
*/