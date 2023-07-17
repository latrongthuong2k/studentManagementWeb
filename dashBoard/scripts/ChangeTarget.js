
// courseList
var courseList = [];

// classList
var studyClass = [];

// studentList
var studentList = [];

// users
userSystems = [

    { email: 'latrongthuong7@gmail.com', password: 'thuong191020', lockStatus: false, userName: 'Thuong' }

];

// pattern obj
var newInformationStudent = {
    studentID: '',
    Birthday: '',
    Name: '',
    Email: '',
    Phone: '',
    Class: '',
    Address: '',
    Status: '',
    Descriptions: '',
    Gender: ''
};
var classRoom = {
    ClassId: '', ClassName: '', Descriptions: '', TotalNumber: '', Lecturer: '', Status: '', Students: []
}
var user = {
    email: '', password: '', lockStatus: '', userName: ''
}
var course = { CourseId: '', CourseName: '', CourseTime: '', Status: '', Class: [] };



// pattern table

// Course
function patternTbodyCourse(catalog = {}, index = '') {
    let data = ` 
          <td>${index + 1}</td>
          <td>${catalog.CourseId}</td>
          <td>${catalog.CourseName}</td>
          <td>${catalog.CourseTime}</td>
          <td>${catalog.Status}</td>
          <td class="actionButton">
        <button  onclick="editInfoCourse('${catalog.CourseId}')"><i class="fa-solid fa-pen-to-square"></i></button>
        <button  onclick="deleteInfo('${catalog.CourseId}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>  
          </td>
        `;
    return data;
}
// Class
function patternTbodyClass(catalog = {}, index = 0) {
    let data = ` 
          <td>${index + 1}</td>
          <td>${catalog.ClassId}</td>
          <td>${catalog.ClassName}</td>
          <td>${catalog.Lecturer}</td>
          <td>${catalog.Descriptions}</td>
          <td>${catalog.TotalNumber}</td>
          <td>${catalog.Status}</td>
          <td class="actionButton">
        <button  onclick="editInfoClass('${catalog.ClassId}')"><i class="fa-solid fa-pen-to-square"></i></button>
        <button  onclick="deleteInfo('${catalog.ClassId}')"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-trash"></i></button>  
          </td>
        `;
    return data;
}
// Students
function patternTbodyStudents(catalog = {}, index = 0) {
    let data = `
          <td>${index + 1}</td>
          <td>${catalog.studentID}</td>
          <td>${catalog.Name}</td>
          <td>${catalog.Phone}</td>
          <td>${catalog.Email}</td>
          <td>${catalog.Gender}</td>
          <td>${catalog.Class}</td>
          <td>${catalog.Status}</td>
          <td>${catalog.Birthday}</td>
          <td class="actionButton">
          <button onclick="editInfoStudent('${catalog.studentID}')"><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="deleteInfo('${catalog.studentID}')" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-solid fa-trash"></i></button>  
            </td>
        `
    return data;
};
// Users
function patternTbodyUser(catalog = {}, index = 0) {
    let data = ` 
          <td>${index + 1}</td>
          <td>${catalog.email}</td>
          <td>${catalog.password}</td>
          <td>${catalog.userName}</td>
          <td>${catalog.lockStatus}</td>
          <td class="actionUser">
              <button onclick=""><i
                      class="fa-solid fa-lock-open"></i></button>
              <button onclick="" data-bs-toggle="modal"
                  data-bs-target="#exampleModal"><i
                      class="fa-solid fa-lock"></i></i></button>
          </td>
        `
    return data;
};

// string tem
var studentInputPattern = `  <h3 id = "submitBoard">Tạo mới sinh viên</h3>
                        <div class="row gap-lg-5">
                            <div class="col">
                                <label for="studentID">Mã sinh viên</label>
                                <input type="text" id="studentID" class="form-control" name="studentID">
                                <div id="feelBackID" class="feelBack">
                                </div>
                            </div>
                            <div class="col">
                                <label for="birthDay">Ngày sinh </label>
                                <input type="text" id="birthDay" class="form-control" name="birthDay"
                                    placeholder="(DD/MM/YYYY)">
                                <div id="feelBackBirthday" class="feelBack">
                                </div>
                            </div>
                        </div>
                        <div class="row gap-lg-5">
                            <div class="col">
                                <label for="name">Tên sinh viên</label>
                                <input type="text" id="name" class="form-control" name="name">
                                <div id="feelBackName" class="feelBack">

                                </div>
                            </div>
                            <div class="col">
                                <label for="classStudy">Lớp học</label>
                                <input type="text" id="classStudy" class="form-control" name="classStudy">
                                <div id="feelBackClass" class="feelBack">
                                </div>
                            </div>
                        </div>
                        <div class="row gap-lg-5">
                            <div class="col">
                                <label for="address">Địa chỉ</label>
                                <input type="text" id="address" class="form-control" name="address">
                                <div id="feelBackAddress" class="feelBack">
                                </div>
                            </div>
                            <div class="col">
                                <label for="email">Email</label>
                                <input type="text" id="email" class="form-control" name="email"
                                    placeholder="abc@gmail.com">
                                <div id="feelBackEmail" class="feelBack">
                                </div>
                            </div>
                        </div>
                        <!-- textArea -->
                        <div class="row gap-lg-5">
                            <div class="col">
                                <label for="descriptions">Mô tả (Không bắt buộc)</label>
                                <textarea class="form-control" id="descriptions" name="descriptions" rows="4"
                                    cols="30"></textarea>
                            </div>
                            <div class="col">
                                <div class="col">
                                    <label for="phone">Số điện thoại</label>
                                    <input type="text" id="phone" class="form-control" name="phone"
                                        placeholder="09 - 0000 - 0000">
                                    <div id="feelBackPhone" class="feelBack">
                                    </div>
                                </div>
                                <div class="col">
                                    <div style="
                                                        color: black;
                                                        margin-top: 25px; display:flex;justify-content: center;
                                                        justify-content: space-evenly;
                                                        align-items: center; padding: 10px 20px; border:2px dashed rgb(0, 174, 255); border-radius: 6px;
                                                        max-width: 150px;">
                                        <label>
                                            <input type="radio" name="gender" id="gender" value="Nam" checked>
                                            Nam
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" id="gender" value="Nữ">
                                            Nữ
                                        </label>
                                    </div>
                                </div>
                                <div class="col">
                                    <select id="selectStatus"
                                        style="padding: 5px 10px; border-radius: 5px; text-align: center; margin-top: 20px; border-color: rgb(168, 168, 168);">
                                        <option value="">Status</option>
                                        <option value="Chờ lớp">Chờ lớp</option>
                                        <option value="Đang học">Đang học</option>
                                        <option value="Bảo lưu">Bảo lưu</option>
                                        <option value="Đình chỉ">Đình chỉ</option>
                                        <option value="Tốt nghiệp">Tốt nghiệp</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="btn-group gap-lg-4">
                            <button id="finishAddInfo">Thêm mới</button>
                            <button id="Close">Đóng</button>
                        </div>`;

var courseInputPattern = `  <h3 id = "submitBoard">Thêm mới khoá học</h3>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="CourseId">Mã khoá học</label>
                                <input type="text" id="CourseId" class="form-control" name="CourseId">
                            </div>
                            <div id="feelBackCourseId" class="feelBack" style="padding-left: 150px;">
                            </div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="CourseName">Tên khoá học</label>
                                <input type="text" id="CourseName" class="form-control" name="CourseName">
                            </div>
                            <div id="feelBackCourseName" class="feelBack" style="padding-left: 150px;"></div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="CourseTime">Thời gian</label>
                                <input type="text" id="CourseTime" class="form-control" name="CourseTime">
                            </div>
                            <div id="feelBackCourseTime" class="feelBack" style="padding-left: 150px;"></div>
                        </div>
                        <div class="row">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="Status">Status</label>
                                <select id="selectStatus"
                                    style="padding: 5px 10px; border-radius: 5px; text-align: center; border-color: rgb(168, 168, 168);">
                                    <option value="">Status</option>
                                    <option value="Hoạt động">Hoạt động</option>
                                    <option value="Không hoạt động">Không hoạt động</option>
                                </select>
                            </div>
                        </div>
                        <div class="btn-group gap-lg-4">
                            <button id="finishAddInfo">Thêm mới</button>
                            <button id="Close">Đóng</button>
                        </div>
`;
var classInputPattern = ` <h3 id = "submitBoard">Thêm mới lớp học</h3>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="ClassId">Mã lớp học</label>
                                <input type="text" id="ClassId" class="form-control" name="ClassId">
                            </div>
                            <div id="feelBackClassID" class="feelBack" style="padding-left: 150px;">
                            </div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="ClassName">Tên lớp học</label>
                                <input type="text" id="ClassName" class="form-control" name="ClassName">
                            </div>
                            <div id="feelBackClassName" class="feelBack" style="padding-left: 150px;"></div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="LecturerName">Giảng viên</label>
                                <input type="text" id="LecturerName" class="form-control" name="LecturerName">
                            </div>
                            <div id="feelBackLecturerName" class="feelBack" style="padding-left: 150px;"></div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                                <label class="fixStyleCourseInput" for="TotalNumber">Sỉ số</label>
                                <input type="text" id="TotalNumber" class="form-control" name="TotalNumber">
                            </div>
                            <div id="feelBackTotalNumber" class="feelBack" style="padding-left: 150px;"></div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex;">
                            
                                  <label class="fixStyleCourseInput" for="descriptions">Mô tả </label>
                                <textarea class="form-control" id="descriptions" name="descriptions" rows="4"
                                    cols="30"></textarea>
                            </div>
                        </div>
                            <div id="feelBackDescriptions" class="feelBack" style="padding-left: 150px;">
                            </div>
                        </div>
                        <div class="row" style="text-align: left;">
                            <div style="display: flex ;">
                                <label class="fixStyleCourseInput" for="Status">Trạng thái</label>
                                <select id="selectStatus"
                                     style="padding: 8px 30px; border-radius: 6px; text-align: center; border-color: rgb(168, 168, 168);">
                                    <option value="">Status</option>
                                    <option value="Hoạt động">Chờ lớp</option>
                                    <option value="Hoạt động">Hoạt động</option>
                                    <option value="Kết thúc">Kết thúc</option>
                                </select>
                            </div>
                        </div>
                        <div class="btn-group gap-lg-4">
                            <button id="finishAddInfo">Thêm mới</button>
                            <button id="Close">Đóng</button>
                        </div>`;
