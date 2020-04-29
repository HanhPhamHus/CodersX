/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

 var fs = require('fs');
 var readlineSync = require('readline-sync');

 var phoneNumbers = [];

 function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    phoneNumbers = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1.Show all');
    console.log('2.Creat new data');
    console.log('3.Change data');
    console.log('4.Delete data');
    console.log('5.Find data');
    console.log('6.Save and Exit');

    var option = readlineSync.question('>>> ');
    //console.log(option);
    switch (option){
        case '1':
            showData();
            showMenu();
            break;
        case '2':
            showCreatData();
            showMenu();
           // console.log(students);
            break;
        case '3':
            changeData();
            showMenu();
            break;
        case '4':
            deleteData();
            showMenu();
            break;
        case '5':
            findData();
            showMenu();
            break;
        case '6':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}
function showData(){
    for (var data of phoneNumbers){
        console.log(data.id, data.name, data.phoneNumber);
    }
}

function showCreatData(){
    var name = readlineSync.question('Name : ');
    var phoneNumber = readlineSync.question('PhoneNumber : ');
    var id = phoneNumbers.length + 1;
    var data = {
        id: id,
        name: name,
        phoneNumber: parseInt(phoneNumber)
    };
    phoneNumbers.push(data);
}

function changeData(){
    var idEdit = readlineSync.question('Your id :');
    idEdit = parseInt(idEdit);
    for(var i=0; i < phoneNumbers.length; i++)
    {
      if(phoneNumbers[i].id == idEdit)
      {
        var phoneNew = readlineSync.question('New phone:');
        phoneNumbers[i].phone = parseInt(phoneNew);
        saveAndExit();
        break;
      }
    }
  }
function deleteData(){
    var idDel = readlineSync.question('Your id :');
    idDel = parseInt(idDel);
    for(var i=0; i < phoneNumbers.length; i++)
    {
      if(phoneNumbers[i].id == idDel)
      {
        phoneNumbers.splice(i, 1);
        saveAndExit();
        break;
      }
    }
}

function findData(arr){
}

function saveAndExit(){
    var content = JSON.stringify(phoneNumbers);
    fs.writeFileSync('./data.json', content, {encoding: 'utf-8'})
}

function main(){
    loadData();
    //console.log(students);
    showMenu();
}
main();