## 1. 梳理数据结构
* 共有users，projects,tasks三个数据（库）
* users和projects中都有userId属性，对应用户的id
* tasks中有一个projectId属性，意思是这个task属于id为projectId的project


~~~json
  projects: [
    {
      projectId: '1',
      name: '♫ Music',
      userId: '1'，
      key:'INBOX'
    }
  ],
  tasks: [
    {
      id: '1',
      archived: true,
      date: '2000-01-01',
      projectId: '1',
      task: '我要玩游戏',
      userId: '1'
    }
  ],
  users: [
    {
      userId: '1',
      firstName: 'guang',
      lastName: 'yin',
      twitter: '111111'
    }
  ]
~~~