# Git

| **命令**                                               | **功能**                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `git add [文件名]`                                     | 跟踪此文件，即把文件添加到暂存区                             |
| `git add .`                                            | 将已修改文件全部添加到暂存区                                 |
| `git status`                                           | 查看整个仓库的状态                                           |
| `git diff`                                             | 查看工作区被跟踪的文件的修改详情                             |
| `git diff --cached`                                    | 查看暂存区的全部修改                                         |
| `git reset -- [文件名]`                                | 撤销暂存区此文件的修改                                       |
| `git rm --cached [文件名]`                             | 撤销暂存区此文件的修改                                       |
| `git reset --`                                         | 把暂存区的全部修改撤销                                       |
| `git commit -m [备注]`                                 | 生成一个新的提交，一个必须的选项 `-m` 用来提供该提交的备注   |
| `git reset --soft/hard HEAD^`                          | 撤销最近的一次提交，撤销 n 次可以简写为 `HEAD~n`             |
| `git reset --hard [版本号]`                            | 回退到某一版本                                               |
| `git log [分支名]`                                     | 查看某分支的提交历史，分支名缺省查看当前所在分支             |
| `git log --oneline`                                    | 一行显示提交历史                                             |
| `git log -n`                                           | 查看最近 n 个提交                                            |
| `git log --author [贡献者名字]`                        | 查看指定贡献者的提交记录                                     |
| `git log --graph`                                      | 图示法显示提交历史                                           |
| `git config -l`                                        | 查看配置信息                                                 |
| `git config --global alias.[别名] [原命令]`            | 为 Git 命令设置别名，如果原命令中有选项，需要加引号          |
| **远程**                                               |                                                              |
| `git clone + [仓库地址]`                               | 标准克隆仓库命令                                             |
| `git remote -v`                                        | 查看本地仓库所关联的远程仓库信息                             |
| `git push`                                             | 将本地新增的提交推送到远程仓库中                             |
| `git push -f`                                          | 强制推送                                                     |
| `git pull`                                             | 拉取远程分支到本地                                           |
| `git fetch`                                            | 将远程仓库的分支信息拉取到本地仓库                           |
| **分支**                                               |                                                              |
| ``git branch -avv``                                    | 查看全部分支信息                                             |
| `git reflog`                                           | 本地仓库所有分支的每一次版本变化记录                         |
| `git rebase origin/master`                             | 使本地 master 分支基于远程仓库的 master 分支                 |
| `git branch [分支名]`                                  | 创建新的分支                                                 |
| `git checkout [分支名]`                                | 切换分支                                                     |
| `git checkout -b [分支名]`                             | 创建分支并切换到新分支                                       |
| `git push [主机名] [本地分支名]:[远程分支名]`          | 将本地分支推送到远程仓库的分支中，如果分支名是相同的，可以省略 `:[远程分支名]` |
| `git branch -u [主机名/远程分支名] [本地分支名]`       | 将本地分支与远程分支关联（使本地分支跟踪远程分支）           |
| `git branch --unset-upstream [分支名]`                 | 撤销该分支对远程分支的跟踪                                   |
| `git branch -D [分支名]`                               | 删除本地分支                                                 |
| `git push [主机名] :[远程分支名]`                      | 删除远程分支                                                 |
| `git push [主机名] --delete [远程分支名]`              | 删除远程分支                                                 |
| `git branch -m [原分支名] [新分支名]`                  | 给本地分支改名                                               |
| `git remote add [主机名] [主仓库的地址]`               | 增加一个关联主机                                             |
| `git pull --rebase [主机名] [远程分支名]`              | 同步主仓库                                                   |
| `git fetch [主机名]`->`git rebase [主机名/远程分支名]` | 同步主仓库                                                   |
| **标签**                                               | 标签基于某次提交                                             |
| `git tag`                                              | 显示仓库中的全部标签列表                                     |
| `git tag [标签名] -m [备注信息] [提交版本号]`          | 创建标签                                                     |
| `git tag -d [标签名]`                                  | 删除本地标签                                                 |
| `git show [标签名]`                                    | 查看标签详情                                                 |
| `git push origin [标签名]`                             | 推送标签到远程仓库                                           |
| `git push origin --tags`                               | 将全部本地标签推送至远程仓库                                 |
| `git push origin :refs/tags/[标签名]`                  | 删除远程仓库的标签                                           |
| `git checkout [标签名]`                                | 切换到某个标签的提交版本                                     |

