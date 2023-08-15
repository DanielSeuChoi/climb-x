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
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[89%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <LargeHeader size='lg' className="flex justify-center">
                FAQ
              </LargeHeader>
              <ul>
                  <LargeHeader className="text-slate-800" size='md'>
                  <Link href='/'>
                  Home
                  </Link>
                </LargeHeader>

                <Link className="text-black" href='/locations'>
                  <LargeHeader size='md'>
                  Memberships
                </LargeHeader>
                </Link>
                <Link className="text-black" href='/gear'>
                  <LargeHeader size='md'>
                  Gear
                  </LargeHeader>
                </Link>
              </ul>

              <Paragraph className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&apos;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </Paragraph>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
