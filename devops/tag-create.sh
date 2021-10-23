export ENVIROMENT=prd

export WORKING_DIR=../

git checkout master

nextVersion=$(npm --no-git-tag-version version patch)

NAME=nest-boilerplate

CURRENT_TIMESTAMP=$(date '+%Y.%m.%d.%H.%M.%S')
TAG_NAME=$NAME-$ENVIROMENT-$nextVersion-$CURRENT_TIMESTAMP

echo "Creating production tag '${TAG_NAME}'..."

git add $WORKING_DIR/package.json
git add $WORKING_DIR/CHANGELOG.md
git commit -m "feat(release): add production version '${TAG_NAME}'"
git tag -a $TAG_NAME -m "${TAG_NAME}"

git push origin master
git push origin $TAG_NAME && git push

echo 'Finish'
