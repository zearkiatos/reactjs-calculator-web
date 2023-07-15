if [ $(echo "$NODE_ENV")=="development" ]
then
    npm run docker:dev
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"