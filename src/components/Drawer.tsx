"use client";

import { Drawer } from "vaul";
import Button from "@/ui/Button";
import Icons from "@/components/Icons";
import LargeHeader from '@/components/LargeHeader'
import Paragraph from '@/components/Paragraph'
import Link from "next/link";
export default function MyDrawer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button className="fixed bottom-9 right-4  
        flex items-center justify-center 
        transition-all" variant={'ghost'}>
          <Icons.Menu />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[50%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <LargeHeader size='lg' className="dark:text-slate-800 text-center">
                Navigate
              </LargeHeader>
              <br />
              <ul>
                <LargeHeader size='md' className="dark:text-slate-800 text-start underline p-3">
                  <Link href='/'>
                    Home
                  </Link>
                </LargeHeader>
                <LargeHeader size='md' className="dark:text-slate-800 text-start underline p-3" >
                  <Link href='/membership'>
                    Memberships
                  </Link>
                </LargeHeader>
                <LargeHeader size='md' className="dark:text-slate-800 text-start underline p-3"  >
                  <Link href='/contact'>
                    Contact
                  </Link>
                </LargeHeader>
              </ul>
              <br />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
