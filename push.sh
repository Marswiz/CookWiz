read -p '这次提交的描述信息是？' commitInfo
while [ -z $commitInfo ]
    do
    read -p '提交信息不能为空, 请重新输入:' commitInfo
done

git add .
git commit -m commitInfo
git push origin master
echo 'Completely Finished.'