import request from '@/utils/request'

export function getDeviceList(params) {
  return request({
    url: '/dashboard/device/list',
    method: 'get',
    params
  })
}

export function deleteDevice(data) {
  return request({
    url: '/dashboard/device/delete',
    method: 'post',
    data
  })
}

export function getTaskList(params) {
  return request({
    url: '/dashboard/task/list',
    method: 'get',
    params
  })
}

export function getTask(params) {
  return request({
    url: '/dashboard/task/query',
    method: 'get',
    params
  })
}

export function addTask(data) {
  return request({
    url: '/dashboard/task/create',
    method: 'post',
    data
  })
}

export function deleteTask(data) {
  return request({
    url: '/dashboard/task/delete',
    method: 'post',
    data
  })
}