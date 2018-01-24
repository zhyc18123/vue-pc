import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/components/Index'], resolve)
const Student = resolve => require(['@/components/student/Student'], resolve)
const Imports = resolve => require(['@/components/student/Imports'], resolve)
const AddStudent = resolve => require(['@/components/student/AddStudent'], resolve)
// 课程管理
const Course = resolve => require(['@/components/course/Course'], resolve)
const AddCourse = resolve => require(['@/components/course/AddCourse'], resolve)
const AddCourseList = resolve => require(['@/components/course/AddCourseList'], resolve)
// 通关规则管理
const Rules = resolve => require(['@/components/passRule/Rules'], resolve)
const AddRule = resolve => require(['@/components/passRule/AddRule'], resolve)
// 勋章管理
const MedalType = resolve => require(['@/components/medal/MedalType'], resolve)
const AddMedalType = resolve => require(['@/components/medal/AddMedalType'], resolve)
const Medal = resolve => require(['@/components/medal/Medal'], resolve)
const AddMedal = resolve => require(['@/components/medal/AddMedal'], resolve)
// 题库管理
const Question = resolve => require(['@/components/question/Question'], resolve)
const AddQuestion = resolve => require(['@/components/question/AddQuestion'], resolve)
// 试卷管理
const Exam = resolve => require(['@/components/exam/Exam'], resolve)
const AddExam = resolve => require(['@/components/exam/AddExam'], resolve)
const SetQuestion = resolve => require(['@/components/exam/SetQuestion'], resolve)
// 资源管理
const Source = resolve => require(['@/components/source/Source'], resolve)
const AddSource = resolve => require(['@/components/source/AddSource'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/student',
      component: Student,
      children:[]
    },{
        path:'/student/imports',
        component:Imports
      },{
        path:'/student/add-student',
        component:AddStudent
      },{
        path:'/course',
        component:Course
      },{
        path:'/course/add-course',
        component:AddCourse
      },{
        path:'/course/add-course-list',
        component:AddCourseList
      },{
        path:'/pass-rule',
        component:Rules
      },{
        path:'/rule/add-rule',
        component:AddRule
      },{
        path:'/medal-type',
        component:MedalType
      },{
        path:'/medal-type/add-medal-type',
        component:AddMedalType
      },{
        path:'/medal',
        component:Medal
      },{
        path:'/medal/add-medal',
        component:AddMedal
      },{
        path:'/question',
        component:Question
      },{
        path:'/question/add-question',
        component:AddQuestion
      },{
        path:'/exam',
        component:Exam
      },{
        path:'/exam/add-exam',
        component:AddExam
      },{
        path:'/exam/set-question',
        component:SetQuestion
      },{
        path:'/source',
        component:Source
      },{
        path:'/source/add-source',
        component:AddSource
      },
    {
      path: '/',
      component: Index
    },
  ]
})
