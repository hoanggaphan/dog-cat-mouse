this project is just a demo how to use git

// git init
// git status
// git add
// git commit

// git log  --> Xem lại lịch sử commit
// git show --> Xem Chi tiết commit
// git diff --> Xem status vừa thay đổi

// Working Directory
// Staging Area
// Git Repository

// git restore <file> --> undo file vừa chỉnh sửa
// git reset <file> --> Đẩy file từ staging are -> working directory

// git checkout -b <branch> --> Tạo và chuyển sang branch mới
// git checkout <branch> --> Chuyển branch
// git merge <branch> --> Gộp branch hiện tại với <branch> dc chỉ định
// git branch -D <branch> --> Xóa branch chỉ định

// git reset --soft <id_commit> --> Đẩy các commit nằm trên commit chỉ định về Staging Area
// git reset --mixed <id_commit> --> Đẩy các commit nằm trên commit chỉ định về Working Area
// git reset --hard <id_commit> --> Xóa các commit nằm trên commit chỉ định

// git revert <id_commit> --> undo lại commit dc chỉ định (Nguy hiểm ko nên xài nhìu)

// .gitignore --> khai báo những file, folder ko mún gửi đi để tránh dung lượng lớn, thường là node_modules

// git config --global credential.helper store 
// ^^^ not recommend (~/git-credential) --> lưu thông tin user vào credential nhưng ko mã hóa

// git config --global credential.helper "cache --timeout=18000" --> lưu thông tin user vào Ram, sau 18000s sẽ nhập lại

// git clone <http> --> lấy bản sao source từ địa chỉ github
// git pull --> cập nhật source của bạn từ địa chỉ

// Pull request
// 1. git checkout -b <feature_branch>
// 2. git push origin <feature_branch>
// 3. create a pull request on Github
// 4. reveiw code
      4.1 review code online (github)
      4.2 fetch branch into local to test offline (optinal)
      4.3 approve the pull request
// 5. merge to master

// Resolve conflicts
When will conficts happen?
   1. Changing the same file + same line
   2. A deleted file X, B modified X

Method 1: rebase
   1. Using "git rebase"
   2. Resolve confilcts
   3. Push again with -f

Method 2: merge
   1. Merge updated master to feature branch (3-way merge)
   2. Resolve conflicts
   3. Commit and push