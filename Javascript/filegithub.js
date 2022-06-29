// commands used in github

// ls --> list all item in desktop folder
// mkdir --> creating project
// cd(change directory(inside folder)) --> go to inside to the folder
// git-init --> Create an empty Git repository or reinitialize an existing one
// .any file with dot is hiden in mac and linux
// ls -a --> to show all hidden file
// ls .git --> to see inside git folder:
// which contain HEAD, description, info, refs, config, hooks, objects
// touch --> to create new file
// .DS_Store mac os file default.
// git status --> to see the changes in the project
//red color: show unmaintained history of the project
//green color: show file is being added.
// rm-rf --> to remove file/to delete file 

//those file that are not added on that stage

// git add . --> will add all the file which are on current project directory.
// git add file_name --> will add individual file in git.
// git commit --> Record changes to the repository.
// cat file_name --> show what is available inside the file

// how to see modifdified change in git through git status.

//restore --> Restore working tree files
//git restore --stage file name
//(+) is denoted for insertation

// git log --> to see all the commit history

//each commit has hash id assigned , all the commit built on top of each other.

//Head --> denoted which file working currently. 
//reset --> Reset current HEAD to the specified state with hash value.
//ex- git reset 4d45b1a1692dacaf7a2b7b18c1fc2519226c37d9
// all previous commit is being deleted.


//git stash --> bring file into background(they are available but not showing)
//git stash --> Git stash is a built-in command with the distributed Version control tool in Git that locally stores 
//all the most recent changes in a workspace and resets the state of the workspace to the prior commit state

//git stash pop : ->> will bring background to forground
//git stash clear : --> those change which are made all getting erased it will not be recovered.

//*****Hosting project on github */

//Attach project with url
//remote --> working with urls
//origin --> what is the name of the urls which you going to add

//EX: git remote add origin https://github.com/pawanv048/communityshow-git.git
// this will add 

//git remote -v --> this will show all the urls attach to you current working folder

//******* */

// we did't shared the change with urls
// for sharing change with urls push is used

// git push origin master (for pushing changes)
// git push (for share change) origin (to which url do you want to push) master (name of the branch).
// branch --> main because of the inclusive naming convension is called master
// (origin/master) --> show latest commit on remote branch

// when we creating new feature or solving some issue always creating a branch because main branch is shows all changes.
// git clone --> downing the folder from git.