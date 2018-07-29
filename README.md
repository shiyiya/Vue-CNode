# Vue-Cnode

[在线地址](http://vuecnode.runtua.cn/)

![home](./shot/home.png)
![topic](./shot/topic-m.png)![user](./shot/user-m.png)

# TodoList

- [√] 主题首页
- [√] 主题详情
- [×] 编辑主题
- [√] 新建主题
- [√] 编辑主题
- [×] 收藏主题
- [×] 取消收藏主题
- [×] 用户所收藏的主题
- [√] 新建评论
- [×] 为他人评论点赞
- [×] 评论他人的评论
- [√] 用户详情/个人主页
- [√] 登录
- [×] 获取未读消息数
- [×] 获取已读和未读消息
- [×] 标记全部已读
- [×] 标记单个消息为已读
- [×] ....

## note

```javascript
- error："TypeError: Object doesn't support property or method 'scrollTo'"
- error-code：document.documentElement.scrollTo(0,0)
- fix：`edge` 不支持 `DOM scrollTo`

- error：ios 下拉刷新
- fix：`document.documentElement.scrollTop` => `document.body.scrollTop`
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```
