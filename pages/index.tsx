import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Defaultlayout, SideBar} from 'uno-ds'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <Defaultlayout>
      <Dashboard />
    </Defaultlayout>
  )
}
