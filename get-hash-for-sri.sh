echo
echo "Welcome to get-has-for-sri.sh!"
echo "Type the file name (including extension) and hit enter:"
read fileName
echo
echo "sha384-"
echo
echo "and then"
echo
cat $fileName | openssl dgst -sha384 -binary | openssl base64 -A
echo
